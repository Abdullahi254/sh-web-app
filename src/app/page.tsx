import Image from 'next/image'
import logo from "../../public/Sheng.png"
import sc1 from "../../public/app.jpg"
import sc2 from "../../public/api.jpg"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-6 max-w-7xl mx-auto">

      <div className='flex justify-evenly items-center p-8 flex-wrap w-full'>
        <Image
          src={logo}
          alt='Sheng'
          priority
          className='rotate-2'
        />
        <div className=' flex flex-col space-y-6'>
          <h1 className=' font-semibold text-xl tracking-widest'>SHENG.</h1>
          <h2 className=' font-normal text-xl sm:text-lg tracking-widest'>KENYAN URBAN DICTIONARY.</h2>
          <h3 className=' font-normal text-sm tracking-widest'>Keep up with the modern phrases and words.</h3>
        </div>
      </div>

      <div className='flex justify-evenly items-center p-8 flex-wrap w-full'>
        <Image
          src={sc1}
          alt='Web app'
          priority
          className='rounded-lg mb-8'
          width={300}
          height={300}
        />
        <div className=' flex flex-col space-y-4'>
          <h1 className=' font-semibold text-xl tracking-widest'>WEB APP.</h1>
          <p className='tracking-wider max-w-xs sm:text-sm'>
            The Sheng Language Hub presents a dynamic web platform for users to explore the vibrant Sheng language. Focused on user engagement, the hub encourages collaborative contributions to enrich the Sheng dictionary, fostering a sense of community ownership. With an intuitive interface and tailored registration links, the web app ensures a seamless onboarding experience, connecting users with the urban youth expressions of Nairobi, Tanzania, and Uganda.
          </p>
        </div>
      </div>

      <div className='flex justify-evenly items-center p-8 flex-wrap w-full'>
        <div className=' flex flex-col space-y-4 mb-8'>
          <h1 className=' font-semibold text-xl tracking-widest'>API</h1>
          <p className='tracking-wider max-w-xs sm:text-sm'>

            The Sheng API serves as a foundation for the Sheng Language Hub, facilitating user management and access to a dynamic Sheng word database. It empowers secure onboarding with admin-generated tokens, distinguishing between collaborators and contributors. Continuously evolving, the API promises efficient interactions, maintaining a role-based access control system for a secure and collaborative linguistic community.
          </p>
        </div>
        <Image
          src={sc2}
          alt='api-code'
          priority
          className='rounded-lg'
          width={300}
          height={300}
        />
      </div>



    </main>
  )
}


//#9c92ac