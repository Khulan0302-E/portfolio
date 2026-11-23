const icon = (name, file = `${name}-original`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}.svg`

export const skillCategories = [
  { key: 'all', label: 'Бүгд' },
  { key: 'dev', label: 'Хөгжүүлэлт' },
  { key: 'data', label: 'Өгөгдөл ба AI' },
  { key: 'analysis', label: 'Шинжилгээ ба дизайн' },
  { key: 'tools', label: 'Хэрэгсэл' },
]

export const skills = [
  { name: 'React', level: 65, icon: icon('react'), cat: 'dev', tag: 'Frontend' },
  { name: 'JavaScript', level: 65, icon: icon('javascript'), cat: 'dev', tag: 'Frontend' },
  { name: 'HTML5', level: 75, icon: icon('html5'), cat: 'dev', tag: 'Frontend' },
  { name: 'CSS3', level: 70, icon: icon('css3'), cat: 'dev', tag: 'Frontend' },
  { name: 'Supabase', level: 60, icon: icon('supabase'), cat: 'dev', tag: 'Backend' },
  { name: 'Java', level: 50, icon: icon('java'), cat: 'dev', tag: 'Програмчлал' },
  { name: 'C#', level: 45, icon: icon('csharp'), cat: 'dev', tag: 'Програмчлал' },
  { name: 'React Native', level: 45, icon: icon('react'), cat: 'dev', tag: 'Мобайл' },
  { name: 'Expo', level: 45, icon: icon('expo'), cat: 'dev', tag: 'Мобайл', darkIcon: true },
  { name: 'SQL', level: 65, icon: icon('azuresqldatabase'), cat: 'data', tag: 'Өгөгдлийн сан' },
  { name: 'PostgreSQL', level: 55, icon: icon('postgresql'), cat: 'data', tag: 'Өгөгдлийн сан' },
  { name: 'Python', level: 50, icon: icon('python'), cat: 'data', tag: 'Өгөгдөл ба AI' },
  { name: 'PyTorch', level: 35, icon: icon('pytorch'), cat: 'data', tag: 'Машин сургалт' },
  { name: 'Power BI', level: 55, icon: null, abbr: 'BI', cat: 'data', tag: 'Бизнес интеллект' },
  { name: 'Excel', level: 65, icon: null, abbr: 'XLS', cat: 'data', tag: 'Өгөгдөл боловсруулалт' },
  { name: 'RapidMiner', level: 50, icon: null, abbr: 'RM', cat: 'data', tag: 'Өгөгдөл олборлолт' },
  { name: 'UML', level: 60, icon: null, abbr: 'UML', cat: 'analysis', tag: 'Системийн шинжилгээ' },
  { name: 'Figma', level: 55, icon: icon('figma'), cat: 'analysis', tag: 'UI/UX дизайн' },
  { name: 'Git', level: 60, icon: icon('git'), cat: 'tools', tag: 'Хувилбарын удирдлага' },
  { name: 'GitHub', level: 65, icon: icon('github'), cat: 'tools', tag: 'Хувилбарын удирдлага', darkIcon: true },
  { name: 'Vite', level: 55, icon: icon('vitejs'), cat: 'tools', tag: 'Хэрэгсэл' },
  { name: 'Vercel', level: 65, icon: icon('vercel'), cat: 'tools', tag: 'Байршуулалт', darkIcon: true },
]

export const contacts = [
  {
    label: 'Имэйл',
    icon: 'mail',
    value: 'erdeneochirkhulan777@gmail.com',
    href: 'mailto:erdeneochirkhulan777@gmail.com',
  },
  { label: 'GitHub', icon: 'github', value: 'Khulan0909', href: 'https://github.com/Khulan0909' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    value: 'Khulan Erdene-Ochir',
    href: 'https://www.linkedin.com/in/khulan-erdene-ochir-252891364',
  },
  {
    label: 'Facebook',
    icon: 'facebook',
    value: 'Khulan Erdene-Ochir',
    href: 'https://www.facebook.com/khulan.erdene.ochir.656878',
  },
]
