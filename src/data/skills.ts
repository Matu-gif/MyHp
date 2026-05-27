export type SkillItem = {
  name: string;
  primary?: boolean;
  accent?: boolean;
};

export type SkillCategory = {
  key: string;
  label: string;
  pipColor: string;
  items: SkillItem[];
};

export const CATEGORIES: SkillCategory[] = [
  {
    key: 'lang',
    label: 'Languages / Frameworks',
    pipColor: 'bg-blue',
    items: [
      { name: 'Next.js', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'Tailwind CSS', primary: true },
      { name: 'React' },
      { name: 'Node.js' },
    ],
  },
  {
    key: 'db',
    label: 'Database / Backend',
    pipColor: 'bg-yellow',
    items: [
      { name: 'Supabase', primary: true },
      { name: 'PostgreSQL' },
      { name: 'Auth / RLS' },
    ],
  },
  {
    key: 'api',
    label: 'API / Integrations',
    pipColor: 'bg-ink',
    items: [
      { name: 'Resend', accent: true },
      { name: 'LINE Messaging API', accent: true },
      { name: 'Google Meet REST', accent: true },
      { name: 'Google Calendar API', accent: true },
    ],
  },
  {
    key: 'tool',
    label: 'Workflow / Tools',
    pipColor: 'bg-blue',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Google Workspace' },
      { name: 'VS Code' },
      { name: 'Claude Code Pro', primary: true },
    ],
  },
];
