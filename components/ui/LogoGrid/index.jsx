import Image from 'next/image'
import freshbooks from '../../../public/logos/test.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import figma from '../../../public/logos/figma.svg'
import Oracle from '../../../public/logos/oracle.svg'
import notion from '../../../public/logos/notion.svg'
import Azure from '../../../public/logos/azure2.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickupst from '../../../public/logos/clickup.svg'
import onelogin from '../../../public/logos/onelogin.svg'
import Equinix from  '../../../public/logos/equinix.svg'
import SectionWrapper from '../../SectionWrapper'
import AWS from '../../../public/logos/aws.svg'
import Oxide from '../../../public/logos/Oxide.svg'
import Cisco from '../../../public/logos/Cisco.svg'
import Tailscale from '../../../public/logos/tailscale.svg'
import Digital from '../../../public/logos/Digital.svg'
import PANW from '../../../public/logos/PANW.svg'
import ATT from '../../../public/logos/Att.svg'
import Cisco from '../../../public/logos/Cisco.svg'
import Arista from '../../../public/logos/Arista.svg'

import Juniper from '../../../public/logos/Juniper.svg'
import Fortinet from '../../../public/logos/Fortinet.svg'

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
        src: Azure,
        alt: "Azure"
    },
    {
        src: Oracle,
        alt: "Oracle"
    },
    {
        src: Oxide,
        alt: "Oxide"
    },
    {
        src: PANW,
        alt: "PANW"
    },
    {
        src: Tailscale,
        alt: "Tailscale"
    },
    {
        src: Digital,
        alt: "Digital Realty"
    },
    {
        src: ATT,
        alt: "ATT"
    },
    {
        src: Juniper,
        alt: "Juniper"
    },
    {
        src: Fortinet,
        alt: "Fortinet"
    },
    {
        src: Cisco,
        alt: "Cisco"
    },
    {
        src: Arista,
        alt: "Arista"
    },
]  


const LogoGrid = () => (
<SectionWrapper>
  <div className="custom-screen">
    <h2 className="font-semibold text-sm text-gray-800 text-center">
      Designed To Work With Your Public, Private Cloud & On-Prem Infrastructure  
    </h2>

    <div className="mt-8 flex justify-center">
      <ul className="inline-grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {logos.map((item, idx) => (
          <li key={idx} className="h-20 flex items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt} 
              className="max-h-full max-w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  
  </div>
</SectionWrapper>
)

export default LogoGrid