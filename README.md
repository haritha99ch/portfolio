# Portfolio Project

This project uses React, TypeScript, Vite, and Tailwind CSS to create a personal website. The UI design of this portfolio project is inspired by [ByteGrad/portfolio-website](https://github.com/ByteGrad/portfolio-website).
![Image](https://repository-images.githubusercontent.com/688580905/1954f914-660f-4f37-b98b-0c4ba7c84b00)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js and npm](https://nodejs.org/en/download).
- You have installed [Powershell Core](https://github.com/PowerShell/PowerShell/tree/v7.3.6#get-powershell).

## Setting Up and Running the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.

Your site should now be accessible at `http://localhost:5000`.

## Data

This portfolio is powered by data you provide through a series of PowerShell scripts that prompt for your input:

- `npm run add-details`: Prompts you to enter your personal details and saves them to a JSON file.
- `npm run add-skills`: Prompts you to enter your skills and saves them to a JSON file.
- `npm run add-project`: Prompts you to enter your project details and saves them to a JSON file.
- `npm run add-milestone`: Prompts you to enter your milestone details and saves them to a JSON file.

These scripts allow for easy updating of your portfolio's content.

## Deployment

This project uses the `gh-pages` package for deployment to GitHub Pages. After running the build script with `npm run build`, you can deploy the website with `npm run deploy`. This will push the contents of the `dist` directory (created by the build process) to the `gh-pages` branch of your repository, which GitHub Pages will serve as a website.

In your `package.json` file, make sure the `homepage` field points to the correct GitHub Pages URL:

```json
{
  "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
}
```

Replace <your-github-username> with your GitHub username and <your-repo-name> with the name of your GitHub repository.

## Acknowledgments

This UI design is inspired by the [ByteGrad's portfolio website](https://github.com/ByteGrad/portfolio-website). A big thank for the inspiration!
