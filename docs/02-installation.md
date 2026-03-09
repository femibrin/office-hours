# Installation

Three things to install: Node.js, Claude Code, and a Claude subscription. Takes about 15 minutes.

Never used a terminal before? Read [What Is a Terminal? →](./00-what-is-a-terminal.md) first. It takes 2 minutes and will make everything below make sense.

---

## Step 1: Open Your Terminal

**Mac:** Press `Cmd + Space` to open Spotlight. Type `Terminal`. Press Enter.

You'll see a window with a blinking cursor. This is where everything happens.

---

## Step 2: Check for Node.js

Claude Code requires Node.js version 18 or higher. Check if you have it:

```bash
node --version
```

You should see something like `v20.11.0` or higher. If you see `v18` or above, you're good — skip to Step 3.

**If you see "command not found" or a version below 18:**

Mac:
```bash
brew install node
```

Don't have Homebrew? Install it first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Then run `brew install node`.

Windows:
```powershell
choco install nodejs
```

After installing, close and reopen your terminal, then run `node --version` again to verify.

---

## Step 3: Get a Claude Subscription

Claude Code requires a paid Claude subscription. The free tier does not work.

- **Claude Pro ($20/month):** Works great. [Sign up here →](https://claude.ai)
- **Claude Max ($100/month):** More usage, faster. Worth it if you use it heavily.

If you already have a Claude Pro or Max subscription, you're set.

---

## Step 4: Install Claude Code

Mac:
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows (PowerShell):
```powershell
irm https://claude.ai/install.ps1 | iex
```

This takes about 30 seconds.

---

## Step 5: Verify the Installation

Close and reopen your terminal (important — this refreshes your path). Then:

```bash
claude --version
```

You should see a version number. If you do, Claude Code is installed.

Now start it once to log in:

```bash
claude
```

It will ask how you want to authenticate. Choose **"Claude account with subscription"** and follow the prompts to log in through your browser.

Once logged in, you can type `/doctor` to run a system check. You should see all green. Press `Ctrl+C` to exit when done.

---

## Step 6: Download Office Hours

Now download the career tools:

```bash
cd ~/Documents
git clone https://github.com/femibrin/office-hours.git
cd office-hours
```

**Don't have git?** If you see "command not found":

Mac:
```bash
xcode-select --install
```
Follow the prompts, then try the `git clone` command again.

**Don't have GitHub access?** If the clone fails with a permission error, Femi needs to add you as a collaborator. Send your GitHub username to Femi and you'll get an invite.

**Don't have a GitHub account?** [Create one here →](https://github.com/join) (free), then send Femi your username.

---

## Verify Everything Works

From inside the `office-hours` directory, start Claude Code:

```bash
claude
```

You should see Claude Code start up. Type:

```
/start
```

If you see the "Welcome to Office Hours" message with the tool list, you're ready to go.

---

## Troubleshooting

**"command not found: claude"**
Close and reopen your terminal. If it still doesn't work, try opening a new terminal tab (`Cmd+T` on Mac).

**"command not found: node"**
Node.js isn't installed. Go back to Step 2.

**"Permission denied" on git clone**
You need to be added as a collaborator on the GitHub repo. Send Femi your GitHub username.

**Authentication issues with Claude**
Make sure your Claude subscription is active at [claude.ai](https://claude.ai). Then run `claude` and re-authenticate.

**"I'm stuck"**
Close the terminal, open a new one, and start from Step 6. If Claude Code is installed, you just need to `cd ~/Documents/office-hours && claude` and type `/start`.

---

## Optional: Voice Input with Wispr Flow

If you'd rather talk than type, install [Wispr Flow](https://www.wispr.flow/) before starting. It lets you dictate anywhere on your Mac — including inside the terminal. You'll see multiple-choice prompts in every tool, so you can just say "option 2" instead of typing it.

This is completely optional. Everything works perfectly by typing.

---

**Next:** [Your First Session →](./03-first-session.md)
