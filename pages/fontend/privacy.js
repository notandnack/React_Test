import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import _headerfont from '../fontend/layout_font/headerfont'
import _topmenufont from '../fontend/layout_font/inc_topmenu'
import _footerfont from '../fontend/layout_font/footerfont'
import _incsideproduct from '../fontend/inc_sideproduct'
import Script from 'next/script'
import Link from 'next/link'

export default function privacy() {

  return (
    
       <div>
        <_headerfont />
        <_topmenufont />

        <section id="privacypage">
        <div className="container-fluid nopad">
            <div className="row">
                <div className="col">
                    <div className="bgheadgreen">
                        <div className="bigtitletext text-center">
                            <h1>PRIVACY POLICY</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_pad">
                <div className="row mb-5">
                    <div className="col">
                        <div className="boxwhiteShadow">
                            <div className="contentText">
                                Velvet (“Velvet,” “we,” “us” or “our”) values your privacy and takes steps to ensure a
                                safe online experience. This Privacy Statement applies to both online and offline data
                                collection, through the Velvet website (https://www.velvetcannabis.com) (the “Site”) and
                                at any of our physical locations. It describes and governs our collection and usage of
                                your personal information. By using the Site, you acknowledge you have read and
                                understood the data practices described in this Privacy Statement.
                                <br /><br />
                                Collection of your Personal Information
                                <br /><br />
                                Velvet collects personally identifiable information, meaning information that
                                identifies, relates to, describes, is reasonably capable of being associated with, or
                                could reasonably be linked, directly or indirectly, with a particular consumer or
                                household (“personal information”). We collect the following categories of personal
                                information:
                                <br /><br />
                                Identifiers, such as your e-mail address, name, IP address, driver&apos;s license number or
                                state identification number, and passport number.
                                Personal information categories listed in the California Customer Records statute (Cal.
                                Civ. Code § 1798.80(e)), such as your name, home or work address, ZIP code, telephone
                                number, and medical information (i.e., medical marijuana recommendation) We may collect
                                your payment information as well, but note this is processed by our third-party payment
                                processor. At the time of pickup or delivery, you must present a valid government-issued
                                identification (i.e., driver&apos;s license, state identification or passport), and we may
                                scan or make a copy of such.
                                Protected classification characteristics under California or federal law, such as your
                                age (i.e., date of birth) and gender.
                                Commercial information, such as records of products purchased or considered.
                                Internet or other similar network activity, such as your browser type, domain names,
                                access times and referring website addresses.
                                Geolocation data, such as your home or work address.
                                Inferences drawn from other personal information, such as your preferences, interests
                                and favorites.
                                Please note that our physical Velvet locations have security cameras and that by
                                entering such physical locations, your image may be caught on our security footage.
                                <br /><br />
                                We collect personal information both directly and indirectly from you. Some information,
                                such as information about your computer hardware and software, is automatically or
                                indirectly collected by Velvet when you use the Site.
                                <br /><br />
                                Third Party Links

                                Our Site may contain links to other websites. Velvet encourages you to review the
                                privacy statements of any website you choose to link to from Velvet so that you can
                                understand how those sites collect, use and share your information. Velvet is not
                                responsible for the privacy statements or other content on Websites outside of the
                                Velvet family of Web sites.
                                <br /><br />
                                Use of your Personal Information

                                Velvet uses the information collected from and about you in the following ways:
                                <br /><br />
                                Our primary use of your personal information is to operate the Site and physical Velvet
                                locations and deliver the products and/or services you have requested.
                                Velvet also uses your personal information to inform you of other products and services
                                available from Velvet and its affiliates.
                                Velvet may also contact you via surveys to conduct research about your opinion of
                                current services or of potential new services that may be offered.
                                Velvet uses information about your computer hardware and software for the operation of
                                the Site, to maintain quality of the Site, and to provide general statistics regarding
                                use of the Site.
                                Velvet keeps track of the pages our customers visit within the Site, in order to
                                determine what Velvet services are the most popular. This data is used to deliver
                                customized content and advertising within Velvet to customers whose behavior indicates
                                that they are interested in a particular subject area.
                                We will not collect additional categories of personal information or use the personal
                                information we collected for materially different, unrelated, or incompatible purposes
                                without providing you notice.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <_footerfont />
       </div>
   
  )
}
