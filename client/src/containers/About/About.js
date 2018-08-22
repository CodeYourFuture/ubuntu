import React from "react";
import AboutUsMenu from '../../components/About/AboutUsMenu';

const AboutInfo = (props) => {
    if (props.location.pathname.indexOf("who-we-are")) {
        return (
            <div>
                <p>
                “(..) we are working in a context of opposition and threat, the cause of 
                which is certainly not the angers which lie between us, but rather that 
                virulent hatred leveled against all women, people of color, lesbians and
                 gay men, poor people - against all of us who are seeking to examine the 
                particulars of our lives as we resist our oppressions, moving toward coalition
                 and effective action.”Audre Lorde, Uses of Anger, Sister Outsider. 

                </p>
                <p>
                The initiative was conceived of in 2016,
                 in anticipation of the new restrictive immigration policies.
                </p>
                <p>
                The Ubuntu Women night shelter is the first dedicated shelter 
                in the UK that provides short term accomodation for women and 
                non binary folks with no recourse to public funds. 
                We are also the first night shelter run and managed only by
                people with direct experience of the asylum, immigration system
                and destitution.
                </p>
                <p>
                We are located in Glasgow and between us  have more than 10 years 
                of shared experience supporting undocumented women and non binary folks.
                Ubuntu is defined by our no borders ethos and we see the
                shelter as active ongoing resistance to the dehumanising and brutalising
                effects of borders. We function and operate independently and autonomously 
                at all times from the views, objectives, policies and influence of any department,
             individual or private enforcement agency associated with the Home Office and UK Border agencies.
                </p>
                <p>
                Ubuntu is original not just in its commitment to helping women with NRPF that other
                 institutions refuse to or are failing to help - it is also run by a small collective 
                 of (mostly) women, queer and non binary folks with lived experience of the asylum, 
                 migration systems and destitution.S
                </p>
            </div>
        )// Html goes here
    } else if (props.location.pathname.indexOf("what-we-do")) {
        return (
            <div>
            <p> 
            Having identified a suitable location, Ubuntu is in the
         process of renovating the space to provide self-referral, 
         short-term and emergency accommodation for women who can be 
         safely housed. It will provide basic amenities (such as laundry and 
         internet), transport, advice, access to formal and informal solidarity 
         networks and referrals to relevant agencies with a view to regularise their housing needs.
         Ubuntu is working to open the shelter in July 2018.     
            </p>
            <p>
            The shelter will be open every night between 5pm and 10am.
            </p>
            <p>
            Ubuntu has plans to develop a purpose-built shelter to offer emergency
             accommodation for a larger group of women and non binary folks including 
             those that have specific care needs, related for example to mental health,
             childcare and/or trauma.
            </p>
            <p>
            Ubuntu aims to develop a network of practical support that eventually empowers
             women with NRPF to break the social, economic and racial barriers that limit 
             their access to legal rights, entitlements and prevent their flourishing as human
              beings. Eventually, the Ubuntu Women Shelter will be run by its own residents,
             thereby better meeting their specific needs, and strengthening Glasgow’s migrant 
             solidarity and campaign networks.
            </p>
        </div>
        ) // different HTML
    }
    else if (props.location.pathname.indexOf("who-do-we-support"))  
    return (
        <div>
            <p>
            We know that migrant women and non-binary folks are particularly 
            at risk of destitution and homelessness, as a result of several 
            (sometimes combined) factors, such as sexuality and gender discrimination,
            racism, dependency, vulnerability to domestic violence and other forms of
            abuse and exploitation (including trafficking), mental illness and childcare 
            responsibilities preventing them from accessing housing, employment or training 
            opportunities.
            </p>
            <p>
            Ubuntu is designed to meet the unique and pressing needs of women and non-binary folks
            who excluded from accessing homelessness and welfare services and housing. These include:
            non-EEA women and non-binary folks with limited leave to remain (students, asylum seekers
            pending a final resolution of their claims);
            Women and non-binary folk who have status but face delays in accessing benefits;
            Citizens and women and non-binary folks with leave to remain but no access to housing benefits
            and welfare.
            We welcome all women (cis and trans) and non-binary folks, including sex-workers.
            We are open to all faiths and religious persuations.
            </p>
        </div>
    )
}


const About = (props) =>  {
    
    return (

  <div>
    <div> <AboutUsMenu />
    </div>
    <div> <AboutInfo />
        
        </div>
        </div>
        
    )
}
export default About;