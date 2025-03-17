export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ibraheem Ganayim',
    jobTitle: 'R&D Team Lead & Software Engineer',
    description: 'Expert R&D Team Lead and Software Engineer in Tel Aviv with expertise in full-stack development, cloud architecture, and team leadership.',
    url: 'https://ibraheemganayim.com',
    image: 'https://ibraheemganayim.com/profile.jpg',
    sameAs: [
      'https://github.com/ibraheemganayim',
      'https://linkedin.com/in/ibraheemganayim'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Braude Academic College of Engineering'
    },
    knowsAbout: [
      'Software Engineering',
      'Full Stack Development',
      'Cloud Architecture',
      'Team Leadership',
      'React',
      'Node.js',
      'TypeScript',
      'AWS'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Dojo',
      jobTitle: 'Co-founder & R&D Team Lead'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}