const fs = require('fs');
const path = require('path');

// Define supported locales
const locales = ['en', 'vi', 'ja', 'zh', 'fr'];

// Function to generate LaTeX content from template and data
function generateLatexContent(templatePath, dataPath) {
  const template = fs.readFileSync(templatePath, 'utf8');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  let content = template;

  // Replace personal information
  content = content.replace(/\[\[NAME\]\]/g, data.personal.name);
  content = content.replace(/\[\[PHONE\]\]/g, data.personal.phone);
  content = content.replace(/\[\[EMAIL\]\]/g, data.personal.email);
  content = content.replace(/\[\[LINKEDIN\]\]/g, data.personal.linkedin);
  content = content.replace(/\[\[LINKEDIN_TEXT\]\]/g, data.personal.linkedin_text);
  content = content.replace(/\[\[GITHUB\]\]/g, data.personal.github);
  content = content.replace(/\[\[GITHUB_TEXT\]\]/g, data.personal.github_text);
  content = content.replace(/\[\[PORTFOLIO\]\]/g, data.personal.portfolio);
  content = content.replace(/\[\[PORTFOLIO_TEXT\]\]/g, data.personal.portfolio_text);

  // Replace section titles
  content = content.replace(/\[\[SUMMARY_TITLE\]\]/g, data.sections.summary_title);
  content = content.replace(/\[\[EXPERIENCE_TITLE\]\]/g, data.sections.experience_title);
  content = content.replace(/\[\[EDUCATION_TITLE\]\]/g, data.sections.education_title);
  content = content.replace(/\[\[PROJECTS_TITLE\]\]/g, data.sections.projects_title);
  content = content.replace(/\[\[SKILLS_TITLE\]\]/g, data.sections.skills_title);
  content = content.replace(/\[\[CERTIFICATIONS_TITLE\]\]/g, data.sections.certifications_title);
  content = content.replace(/\[\[LANGUAGES_TITLE\]\]/g, data.sections.languages_title);

  // Replace summary
  content = content.replace(/\[\[SUMMARY_TEXT\]\]/g, data.summary);

  // Generate experience content
  const experienceContent = data.experience.map(exp => {
    const responsibilities = exp.responsibilities.map(resp => 
      `        \\resumeItem{${resp}}`
    ).join('\n');
    
    return `    \\resumeSubheading
      {${exp.title}}{${exp.duration}}
      {${exp.company}}{${exp.location}}
      \\resumeItemListStart
${responsibilities}
      \\resumeItemListEnd`;
  }).join('\n\n');
  content = content.replace(/\[\[EXPERIENCE_CONTENT\]\]/g, experienceContent);

  // Generate education content
  const educationContent = data.education.map(edu => {
    return `    \\resumeSubheading
      {${edu.institution}}{${edu.location}}
      {${edu.degree}}{${edu.duration}}`;
  }).join('\n');
  content = content.replace(/\[\[EDUCATION_CONTENT\]\]/g, educationContent);

  // Generate projects content
  const projectsContent = data.projects.map(proj => {
    const descriptions = proj.description.map(desc => 
      `            \\resumeItem{${desc}}`
    ).join('\n');
    
    return `      \\resumeProjectHeading
          {\\textbf{${proj.name}} $|$ \\emph{${proj.technologies}}}{${proj.duration}}
          \\resumeItemListStart
${descriptions}
          \\resumeItemListEnd`;
  }).join('\n');
  content = content.replace(/\[\[PROJECTS_CONTENT\]\]/g, projectsContent);

  // Replace skills
  content = content.replace(/\[\[SKILLS_LANGUAGES\]\]/g, data.sections.skills_title.split(' ')[0] || 'Languages');
  content = content.replace(/\[\[SKILLS_FRAMEWORKS\]\]/g, 'Frameworks');
  content = content.replace(/\[\[SKILLS_TOOLS\]\]/g, 'Tools');
  content = content.replace(/\[\[SKILLS_CLOUD\]\]/g, 'Cloud');
  content = content.replace(/\[\[LANGUAGES_LIST\]\]/g, data.skills.languages);
  content = content.replace(/\[\[FRAMEWORKS_LIST\]\]/g, data.skills.frameworks);
  content = content.replace(/\[\[TOOLS_LIST\]\]/g, data.skills.tools);
  content = content.replace(/\[\[CLOUD_LIST\]\]/g, data.skills.cloud);

  // Replace certifications
  const certificationsText = data.certifications.map(cert => `${cert}`).join(' \\\\\\\\ ');
  content = content.replace(/\[\[CERTIFICATIONS_LIST\]\]/g, certificationsText);

  // Replace languages
  const languagesText = data.languages.map(lang => `${lang}`).join(' \\\\\\\\ ');
  content = content.replace(/\[\[SPOKEN_LANGUAGES\]\]/g, languagesText);

  return content;
}

// Generate LaTeX files for each locale
function generateAllLatexFiles() {
  const templatePath = path.join(__dirname, 'templates', 'base.tex');
  const outputDir = path.join(__dirname, 'output');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  locales.forEach(locale => {
    const dataPath = path.join(__dirname, 'data', `${locale}.json`);
    const outputPath = path.join(outputDir, `resume-${locale}.tex`);

    if (fs.existsSync(dataPath)) {
      try {
        const latexContent = generateLatexContent(templatePath, dataPath);
        fs.writeFileSync(outputPath, latexContent);
        console.log(`✅ Generated ${outputPath}`);
      } catch (error) {
        console.error(`❌ Error generating ${locale}: ${error.message}`);
      }
    } else {
      console.warn(`⚠️ Data file not found for locale: ${locale}`);
    }
  });
}

// Run the generation
if (require.main === module) {
  generateAllLatexFiles();
}

module.exports = { generateLatexContent, generateAllLatexFiles };
