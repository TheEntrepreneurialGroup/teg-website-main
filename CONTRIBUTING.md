# Contributing to TEG Student Club Website

Thank you for your interest in contributing to our website! This document provides guidelines and instructions for contributing to the project.

## ⚠️ Important Notice

**DO NOT PUSH DIRECTLY TO MAIN BRANCH**
- This is a private repository without branch protection
- All changes must go through Pull Requests
- The main branch is reserved for production-ready code only

## 🎯 How to Contribute

### 1. Finding Issues to Work On

1. Check the [Issues](https://github.com/[your-org]/teg-website/issues) page
2. Look for issues labeled as:
   - `good first issue` (if you're new to the project)
   - `help wanted`
   - `bug`
   - `enhancement`

### 2. Claiming an Issue

1. Comment on the issue you want to work on
   ```
   I would like to work on this issue.
   ```
2. Wait for maintainer approval
3. Once approved, you can start working on it

### 3. Development Workflow

1. Create a new branch from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/issue-number-brief-description
   ```

2. Make your changes following our Code Style Guidelines.

3. Commit your changes with clear commit messages:
   ```bash
   git commit -m "fix: resolve issue #123 - brief description"
   ```

4. Push your branch:
   ```bash
   git push origin feature/issue-number-brief-description
   ```

### 4. Submitting a Pull Request

1. Go to the [Pull Requests](https://github.com/[your-org]/teg-website/pulls) page
2. Click "New Pull Request"
3. Select:
   - Base branch: `dev`
   - Compare branch: your feature branch
4. Fill in the PR template:
   - Link the related issue
   - Describe your changes
   - Add screenshots if applicable
   - Mention any breaking changes

### 5. PR Review Process

1. Wait for maintainer review
2. Address any feedback
3. Once approved, your PR will be merged into `dev`

## 📝 Code Style Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Keep components small and focused
- Use proper naming conventions
- Add comments for complex logic
- Update documentation if needed

## 🔍 Before Submitting

- Run the linter: `npm run lint`
- Test your changes locally
- Ensure all tests pass (if applicable)
- Update documentation if needed
- Check for any console errors
- Verify responsive design

## 🎨 Commit Message Format

Use the following format for commit messages:
```
type: brief description

- type can be: feat, fix, docs, style, refactor, test, chore
- description should be clear and concise
```

## 📫 Need Help?

- Open a new issue for questions
- Contact project maintainers
- Check the [README.md](./README.md) for setup instructions

---

Thank you for contributing to our project! 🎉 
