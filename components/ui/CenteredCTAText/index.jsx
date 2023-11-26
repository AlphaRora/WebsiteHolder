import SectionWrapper from "../../SectionWrapper"

const CenteredCTAText = () => {
    return (
        <SectionWrapper>
            <div className="custom-screen text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        We help you secure your most critical workloads
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Panpatico provides you with complete control on access, activity and usage of your cloud applications, workloads and resources, for whoever and whenever
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CenteredCTAText