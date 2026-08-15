import Image from 'next/image'
import type { TeamMember } from '../data/members'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-[320px] h-[580px] rounded-[12px] border-2 border-[#9A9AA5] bg-[#F5F5F7] p-6">
      <div className="mb-4 flex justify-center">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={member.name}
            width={168}
            height={168}
            className="h-[168px] w-[168px] rounded-full object-cover"
          />
        ) : (
          <div className="flex h-[168px] w-[168px] items-center justify-center rounded-full bg-violet-500">
            <span className="text-3xl font-bold text-white">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-center font-semibold text-zinc-900">{member.name}</h3>
      <p className="text-center text-sm font-medium text-violet-600">{member.role}</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-zinc-900">About Me:</p>
        <p className="mt-1 text-sm text-zinc-600">{member.blurb}</p>
      </div>
    </div>
  )
}
