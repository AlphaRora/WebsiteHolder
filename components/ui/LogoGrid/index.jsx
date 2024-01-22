import Image from 'next/image'
import freshbooks from '../../../public/logos/test.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import figma from '../../../public/logos/figma.svg'
import auth0 from '../../../public/logos/jump.png'
import notion from '../../../public/logos/notion.svg'
import okta from '../../../public/logos/okta.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickupst from '../../../public/logos/clickup.svg'
import onelogin from '../../../public/logos/onelogin.svg'
import Equinix from  '../../../public/logos/equinix.svg'
import SectionWrapper from '../../SectionWrapper'
import AWS from '../../../public/logos/aws.svg'
const logos = [
    {
        src: AWS,
        alt: "AWS"
    },
    {
        src: Equinix,
        alt: "Equinix"
    },

    {
        src: okta,
        alt: "Okta"
    },
    {
        src: auth0,
        alt: "Jump Cloud"
    },
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
            Designed To Work With Your Public, Private Cloud & On-Prem Infrastructure
            </h2>
            <div className="mt-8 flex justify-center">
    <ul className="inline-grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
        {
            logos.map((item, idx) => (
                <li key={idx}>
                    <Image src={item.src} alt={item.alt} className="max-w-full h-auto" />
                </li>
            ))
        }
    </ul>
</div>

        </div>
    </SectionWrapper>
)

export default LogoGrid