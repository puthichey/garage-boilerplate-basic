export interface TeamMember {
  id: string
  name: string
  role: string
  blurb: string
  photoUrl: string | null // null = show initials fallback
}

export const teamMembers: TeamMember[] = [
  {
    id: 'cm',
    name: 'Charile Mchaileh',
    role: 'Project Manager',
    blurb: 'Hello I\'m Charlie Mchaileh, a third year Bachelor of I.T student, and I have a passion for sports and physical activity, mainly including soccer and the gym.', // fill in real blurb
    photoUrl: '/team/cm.jpg',
  },
  {
    id: 'bm',
    name: 'Bawi Tui Muk',
    role: 'Business Analyst',
    blurb: 'Hello I’m Bawi Tui Muk, a third-year Bachelor of IT student. I have a strong passion for music, sports, and PC gaming. Always up for a badminton run or a gym session. Easy going, chatty, brings vibes.',
    photoUrl: '/team/bm.jpg',
  },
  {
    id: 'ps',
    name: 'Puthichey Samrith',
    role: 'Developer',
    blurb: 'Hello I am Puthichey Samrith, you can call me "Chey" for short. I am a third-year student at RMIT as Bachelor of Computer Science, and in my spare time I like to cook. ',
    photoUrl: '/team/ps.jpg',
  },
  {
    id: 'aa',
    name: 'Aga Agaton',
    role: 'UX Designer',
    blurb: 'Hi! I’m Aga, also a third-year student doing Bachelor of IT. My passion involves physical activities such as running and weightlifting, not to mention expressing my creativity through music in multiple ways.',
    photoUrl: '/team/aa.jpg',
  },
]
