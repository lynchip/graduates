# Git Workflow Guide

## Basic Workflow (Always the same!)

The standard process for making changes:

```powershell
git status              # See what changed
git add .               # Stage all changes
OR # Add all changed files
git add .
# OR add specific files
git add index.html contato.html

git commit -m "Description of changes"
git commit -m "Add bilingual content to contact page and improve hero section"
git push                # Send to GitHub
git push origin main
```
```
Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push 
```
---

## Adding Files

### Add All Changed Files (Most Common)
```powershell
git add .
# or
git add -A
```

### Add Specific Files
```powershell
git add index.html
git add index.html about.html contact.html
```

### Add by Pattern
```powershell
git add *.html          # All HTML files
git add *.css           # All CSS files
git add images/*        # All files in images folder
git add src/**          # Everything in src and subdirectories
```

---

## Commit Messages

Good commit messages are descriptive:

```powershell
git commit -m "Add contact form to homepage"
git commit -m "Fix responsive design on mobile"
git commit -m "Update hero image and copy"
git commit -m "Criar landing page em português"
```

---

## Quick Shortcuts

### Stage and Commit Modified Files
```powershell
git commit -am "Quick update"
git push
```

**Note:** The `-a` flag only stages **modified** files, not **new** files. New files still need `git add`.

---

## Common Commands

### Check Status
```powershell
git status              # See what's changed
```

### View Commit History
```powershell
git log                 # Full history
git log --oneline       # Condensed view
```

### Undo Changes (Before Commit)
```powershell
git restore index.html  # Discard changes to a file
git restore .           # Discard all changes
```

### Unstage Files
```powershell
git restore --staged index.html   # Unstage a file
```

### Pull Latest Changes from GitHub
```powershell
git pull                # Get latest updates from GitHub
```

---

## Complete Example Workflow

### Scenario: Update multiple pages

```powershell
# 1. Make your changes to files in VS Code

# 2. Check what changed
git status

# 3. Stage all changes
git add .

# 4. Commit with message
git commit -m "Update homepage and about page"

# 5. Push to GitHub
git push
```

---

## GitHub Pages Deployment

After `git push`:
- GitHub Pages automatically rebuilds your site
- Changes appear in 1-2 minutes
- Check: https://lynchip.github.io/galway-website
- Custom domain: https://galway.com.br

---

## Troubleshooting

### Push Rejected (Remote has changes)
```powershell
git pull                # Pull remote changes first
git push                # Then push yours
```

### View What Changed in a File
```powershell
git diff index.html     # See changes before staging
```

### Forgot to Pull Before Making Changes
```powershell
git stash               # Save your changes temporarily
git pull                # Get remote changes
git stash pop           # Reapply your changes
```

---

## Best Practices

1. **Commit often** - Small, focused commits are better than large ones
2. **Pull before you start** - Avoid conflicts by staying up to date
3. **Descriptive messages** - Future you will thank you
4. **Test locally first** - Make sure it works before pushing
5. **One feature per commit** - Makes it easier to track changes

---

## Quick Reference

| Command | What it does |
|---------|-------------|
| `git status` | Show changed files |
| `git add .` | Stage all changes |
| `git add file.html` | Stage specific file |
| `git commit -m "msg"` | Commit with message |
| `git push` | Send to GitHub |
| `git pull` | Get from GitHub |
| `git log` | View history |
| `git restore file` | Undo changes |
