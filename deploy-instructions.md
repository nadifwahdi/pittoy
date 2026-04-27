# Pittoy Deployment Instructions

## Step 1: Create Private GitHub Repository

1. Go to https://github.com/new
2. Repository name: `pittoy-prototype`
3. Description: "Pittoy - Personal Finance App Prototype"
4. Visibility: **Private** ✓
5. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repo, GitHub will show you a URL. Copy it, then run:

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/pittoy-prototype.git

# Push your code to the private repo
git push -u origin main
```

If prompted for credentials:
- Username: your GitHub username
- Password: use a Personal Access Token (not your GitHub password)
  - Generate token at: https://github.com/settings/tokens/new
  - Scopes needed: `repo` (all repo permissions)

## Step 3: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Click "Sign Up" or "Login" → use **GitHub** account
3. Click "Add New Project"
4. Click "Import Git Repository"
5. You'll see your repositories:
   - ⚠️ If you don't see `pittoy-prototype`, click "Adjust GitHub App Permissions"
   - Grant Vercel access to your private repos
6. Click "Import" next to `pittoy-prototype`
7. Settings (auto-detected):
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
8. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 4: Share with Stakeholders

After deployment completes:

1. **Production URL:** `https://pittoy-prototype.vercel.app`
2. **Privacy:** Only people with the URL can access it
3. **Updates:** Every git push automatically redeploys

### Optional: Add Password Protection

In Vercel dashboard:
1. Go to your project → Settings → Deployment Protection
2. Enable "Password Protection"
3. Set a password
4. Share URL + password with stakeholders only

## Repository Privacy Settings

Your code is in a **private GitHub repo**, which means:
- ✅ Only you (and people you invite) can see the source code
- ✅ The deployed app on Vercel is public (anyone with URL)
- ✅ You can add password protection in Vercel for extra security

To add collaborators to private repo:
1. Go to your repo on GitHub
2. Settings → Collaborators
3. Add people by GitHub username

---

## Quick Reference

**GitHub Repo:** https://github.com/YOUR-USERNAME/pittoy-prototype (private)
**Vercel App:** https://pittoy-prototype.vercel.app (deployed)
**Local Code:** /workspaces/default/code

## Troubleshooting

**"Repository not found" error:**
- Make sure you're using your correct GitHub username
- Check you have repo access

**Vercel can't see private repo:**
- Click "Adjust GitHub App Permissions" in Vercel
- Grant access to private repositories

**Want to change repo name later:**
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/new-name.git
```
