const { exec } = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);

async function deploy() {
  try {
    console.log("🧹 Cleaning up...");
    await execAsync("npx rimraf .next out");

    console.log("📦 Installing dependencies...");
    await execAsync("npm install");

    console.log("🔍 Running type check...");
    await execAsync("npx tsc --noEmit");

    console.log("🎨 Running lint...");
    await execAsync("npm run lint");

    console.log("🏗️ Building application...");
    await execAsync("npm run build");

    console.log("🗺️ Generating sitemap...");
    await execAsync("npm run postbuild");

    console.log("🎉 Build completed successfully!");
    console.log("\nTo deploy to production:");
    console.log("1. Create a new repository on GitHub");
    console.log("2. Push your code to GitHub");
    console.log("3. Connect your repository to Vercel");
    console.log("4. Add the following environment variables in Vercel:");
    console.log("   - EMAIL_USER");
    console.log("   - EMAIL_PASS");
    console.log("   - NEXT_PUBLIC_SITE_URL");
  } catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exit(1);
  }
}

deploy();
