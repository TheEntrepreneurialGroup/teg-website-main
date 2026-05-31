Add-Type @"
using System;
using System.Runtime.InteropServices;
using System.Text;
public class Win {
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
  [DllImport("user32.dll", CharSet=CharSet.Auto)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);
  public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
}
"@
$found = New-Object System.Collections.ArrayList
$proc = [Win+EnumWindowsProc]{ param($h,$l)
  if ([Win]::IsWindowVisible($h)) {
    $sb = New-Object System.Text.StringBuilder 512
    [Win]::GetWindowText($h, $sb, 512) | Out-Null
    $t = $sb.ToString()
    if ($t -match 'TEG|localhost|Microsoft.+Edge') {
      [void]$found.Add([PSCustomObject]@{ Handle=$h; Title=$t })
    }
  }
  return $true
}
[Win]::EnumWindows($proc, [IntPtr]::Zero) | Out-Null
$found | Format-Table -AutoSize -Wrap
foreach ($w in $found) {
  if ($w.Title -match 'TEG|localhost') {
    [Win]::ShowWindow($w.Handle, 3) | Out-Null
    [Win]::SetForegroundWindow($w.Handle) | Out-Null
    Write-Host "Maximized: $($w.Title)"
  }
}
