import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { teamMembers } from '@/features/team/data/members'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'

export const metadata: Metadata = { title: 'Our Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Group 32 Team B</h1>
        <p className="text-sm text-zinc-400">
          Restyling our login and building our team page for Sprint 1
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
