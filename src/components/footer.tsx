import SocialsButtons from './socials_buttons'
export default function Footer() {
  return (
    <footer className=" bg-transparent w-full">
      <div className=" px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className=" flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-white">DAMOKLES</h1>
            <div className="flex gap-2.5">
              <SocialsButtons />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/50 pt-6">
          <div className="text-center sm:flex sm:justify-center">
            <p className="mt-4 text-sm text-white/50 sm:order-first sm:mt-0">
              &copy; {new Date().toLocaleDateString('fr-fr', { year: 'numeric' })} Damokles. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
