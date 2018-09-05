import React from 'react';
import {Link} from  'react-router-dom';

const AboutUsMenu = props => {
    return <div>
        
            
            <div className='about-btn'>
                <Link to='/who-we-are'>
                <button className="btn btn-primary fn-submit-name"> who we are? </button>
                </Link>
            </div>
            <div className='about-btn'> 
                <Link to='what-we-do'>
                <button className="btn btn-primary fn-submit-name"> what we do? </button>
                </Link>
            </div>
            <div className='about-btn'>
                <Link to='who-do-we-support'>
                <button className="btn btn-primary fn-submit-name"> who do we support? </button>
                </Link>
            </div>
        </div>


}
export default AboutUsMenu ;

