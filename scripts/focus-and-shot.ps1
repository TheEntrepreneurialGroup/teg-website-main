Add-Type @"
using System;
using System.Runtime.InteropServices;
using System.Text;
public class Win2 {
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
  [DllImport("user32.dll")] public static extern bool BringWindowToTop(IntPtr hWnd);
  [DllImport("user32.dll", CharSet=CharSet.Auto)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);
  public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndAfter, int X, int Y, int cx, int cy, uint uFlags);
}
"@
$target = $null
$proc = [Win2+EnumWindowsProc]{ param($h,$l)
  if ([Win2]::IsWindowVisible($h)) {
    $sb = New-Object System.Text.StringBuilder 512
    [Win2]::GetWindowText($h, $sb, 512) | Out-Null
    $t = $sb.ToString()
    if ($t -match 'TEG|localhost' -and $t -match 'Edge') {
      $script:target = [PSCustomObject]@{ Handle=$h; Title=$t }
    }
  }
  return $true
}
[Win2]::EnumWindows($proc, [IntPtr]::Zero) | Out-Null
if ($target) {
  Write-Host "Targeting: $($target.Title)"
  [Win2]::ShowWindow($target.Handle, 3) | Out-Null
  # HWND_TOPMOST = -1, then HWND_NOTOPMOST = -2 to force to front
  [Win2]::SetWindowPos($target.Handle, [IntPtr]::new(-1), 0, 0, 0, 0, 0x0003) | Out-Null
  Start-Sleep -Milliseconds 200
  [Win2]::SetWindowPos($target.Handle, [IntPtr]::new(-2), 0, 0, 0, 0, 0x0003) | Out-Null
  [Win2]::BringWindowToTop($target.Handle) | Out-Null
  [Win2]::SetForegroundWindow($target.Handle) | Out-Null
} else {
  Write-Host "No Edge TEG window found"
}
Start-Sleep -Milliseconds 500
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$bounds = [System.Windows.Forms.SystemInformation]::VirtualScreen
$bmp = New-Object System.Drawing.Bitmap $bounds.Width, $bounds.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($bounds.Location, [System.Drawing.Point]::Empty, $bounds.Size)
$out = "respl\screenshots\edge-foreground.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Host "Saved $out ($($bounds.Width)x$($bounds.Height))"
