import Image from 'next/image'
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={splitPath(picture)}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
const splitPath = (path) => { 
  const all = path.split('public')
  all.shift()
  return all.join('/')
}