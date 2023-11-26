import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/panaptico.png"
        alt="Panaptico logo"
        {...props}
        width={86}
        height={48}
        priority
    />
)
export default Brand