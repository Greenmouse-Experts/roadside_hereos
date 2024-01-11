import Assistance from '../../lib/components/landing/homepage/Assistance'
import HeroBanner from '../../lib/components/landing/homepage/HeroBanner'
import Stranded from '../../lib/components/landing/homepage/Stranded'
import Works from '../../lib/components/landing/homepage/Works'
import LandingLayout from '../../lib/components/layout/landing'

const HomePage = () => {
  return (
    <>
        <LandingLayout>
            <div>
              <HeroBanner/>
              <Assistance/>
              <Stranded/>
              <Works/>
            </div>
        </LandingLayout>
    </>
  )
}

export default HomePage