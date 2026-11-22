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
  { name: 'React', icon: icon('react'), cat: 'dev', tag: 'Frontend' },
  { name: 'JavaScript', icon: icon('javascript'), cat: 'dev', tag: 'Frontend' },
  { name: 'HTML5', icon: icon('html5'), cat: 'dev', tag: 'Frontend' },
  { name: 'CSS3', icon: icon('css3'), cat: 'dev', tag: 'Frontend' },
  { name: 'Supabase', icon: icon('supabase'), cat: 'dev', tag: 'Backend' },
  { name: 'Java', icon: icon('java'), cat: 'dev', tag: 'Програмчлал' },
  { name: 'C#', icon: icon('csharp'), cat: 'dev', tag: 'Програмчлал' },
  { name: 'React Native', icon: icon('react'), cat: 'dev', tag: 'Мобайл' },
  { name: 'Expo', icon: icon('expo'), cat: 'dev', tag: 'Мобайл', darkIcon: true },
  { name: 'SQL', icon: icon('azuresqldatabase'), cat: 'data', tag: 'Өгөгдлийн сан' },
  { name: 'PostgreSQL', icon: icon('postgresql'), cat: 'data', tag: 'Өгөгдлийн сан' },
  { name: 'Python', icon: icon('python'), cat: 'data', tag: 'Өгөгдөл ба AI' },
  { name: 'PyTorch', icon: icon('pytorch'), cat: 'data', tag: 'Машин сургалт' },
  { name: 'Power BI', icon: null, abbr: 'BI', cat: 'data', tag: 'Бизнес интеллект' },
  { name: 'Excel', icon: null, abbr: 'XLS', cat: 'data', tag: 'Өгөгдөл боловсруулалт' },
  { name: 'RapidMiner', icon: null, abbr: 'RM', cat: 'data', tag: 'Өгөгдөл олборлолт' },
  { name: 'UML', icon: null, abbr: 'UML', cat: 'analysis', tag: 'Системийн шинжилгээ' },
  { name: 'Figma', icon: icon('figma'), cat: 'analysis', tag: 'UI/UX дизайн' },
  { name: 'Git', icon: icon('git'), cat: 'tools', tag: 'Хувилбарын удирдлага' },
  { name: 'GitHub', icon: icon('github'), cat: 'tools', tag: 'Хувилбарын удирдлага', darkIcon: true },
  { name: 'Vite', icon: icon('vitejs'), cat: 'tools', tag: 'Хэрэгсэл' },
  { name: 'Vercel', icon: icon('vercel'), cat: 'tools', tag: 'Байршуулалт', darkIcon: true },
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
