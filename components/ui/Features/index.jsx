import DarkWrapper from "../../DarkWrapper"

const Features = () => {

    const features = [
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8H4zm26 10h-8v-8h8zm-6-2h4v-4h-4zm-4-8h-8v-8h8zm-6-2h4v-4h-4z"/><path fill="currentColor" d="M24 17h-2v-2h2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12zm-14-7H2V2h8zM4 8h4V4H4z"/></svg>,
            title: "Adaptive Policies",
            desc: "Build, enforce and deploy granular policies on your workloads, resources and applications with who can access, when, how, where and permitted usage and actions"
        },
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9 21H3c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2zm-6-8v6h6v-6H3zm13 17c-.362 0-.72-.014-1.076-.04c-4.352-.332-8.36-2.732-10.723-6.42l1.685-1.08a12.057 12.057 0 0 0 9.19 5.505c.305.023.613.035.924.035v2zm7 0l-2.1-1c-1.7-.8-2.9-2.6-2.9-4.5V18h10v6.5c0 1.9-1.1 3.7-2.9 4.5L23 30zm-3-10v4.5c0 1.2.7 2.2 1.7 2.7l1.3.6l1.3-.6c1-.5 1.7-1.6 1.7-2.7V20h-6zm7.302-8c.454 1.282.698 2.621.698 4h2c0-1.37-.199-2.708-.584-4h-2.114zM27 10h-3c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2v3c0 1.103-.897 2-2 2zm-3-5v3h3V5h-3zm-4-2.417A13.952 13.952 0 0 0 16 2A13.951 13.951 0 0 0 4.202 8.46l1.684 1.08A11.961 11.961 0 0 1 20 4.698V2.583z"/></svg>,
            title: "Zero Trust Protection",
            desc: "Enable third-party access, office users, roaming users, partners, contractors and more to access your systems and resources securely. Monitor devices, locations, users, actions accessing your resources and workloads for continuous security at all times."
        },
        {
            icon:
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
            title: "360 Visibility",
            desc: "Have eyes on all your assets wherever they may be, monitor current state, activities, access, usage & actions on them"
        },
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="21" cy="21" r="2" fill="currentColor"/><circle cx="7" cy="7" r="2" fill="currentColor"/><path fill="currentColor" d="M27 31a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2Z"/><path fill="currentColor" d="M30 16A14.041 14.041 0 0 0 16 2a13.043 13.043 0 0 0-6.8 1.8l1.1 1.7a24.425 24.425 0 0 1 2.4-1A25.135 25.135 0 0 0 10 15H4a11.149 11.149 0 0 1 1.4-4.7L3.9 9A13.842 13.842 0 0 0 2 16a13.998 13.998 0 0 0 14 14a13.366 13.366 0 0 0 5.2-1l-.6-1.9a11.442 11.442 0 0 1-5.2.9A21.071 21.071 0 0 1 12 17h17.9a3.402 3.402 0 0 0 .1-1ZM12.8 27.6a13.02 13.02 0 0 1-5.3-3.1A12.505 12.505 0 0 1 4 17h6a25.002 25.002 0 0 0 2.8 10.6ZM12 15a21.446 21.446 0 0 1 3.3-11h1.4A21.446 21.446 0 0 1 20 15Zm10 0a23.278 23.278 0 0 0-2.8-10.6A12.092 12.092 0 0 1 27.9 15Z"/></svg>,
            title: "Modern Workspace For Hybrid Work",
            desc: "Enable working from anywhere, whenever a secure and smooth experience for your workforce, while maintinaing best security standards for access and usage of your resources"
        },
    ]

    return (
        <DarkWrapper id="features">
            <div className="custom-screen text-gray-300 justify-between gap-24 lg:flex">
                <div className="max-w-xl">
                    <h2 className="text-white text-3xl font-semibold sm:text-4xl">
                        Secure Access & Usage Of Your Crtical Assets
                    </h2>
                    <p className="mt-3">
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </DarkWrapper>
    )
}

export default Features