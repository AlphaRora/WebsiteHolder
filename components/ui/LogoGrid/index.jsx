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

import SectionWrapper from '../../SectionWrapper'

const logos = [
    {
        src: freshbooks,
        alt: "Microsoft"
    },
    {
        src: onelogin,
        alt: "One Login"
    },
    // {
    //     src: sendgrid,
    //     alt: "sendgrid"
    // },
    // {
    //     src: figma,
    //     alt: "figma"
    // },
    // {
    //     src: clickup,
    //     alt: "clickup"
    // },
    // {
    //     src: algolia,
    //     alt: "algolia"
    // },
    {
        src: okta,
        alt: "Okta"
    },
    // {
    //     src: notion,
    //     alt: "notion"
    // },
    {
        src: auth0,
        alt: "Jump Cloud"
    },
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
            Effortlessly integrate existing identity providers, apps, infrastructure or build your own customized solution on Panaptico
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid