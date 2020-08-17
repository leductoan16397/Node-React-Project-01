import React from 'react';
import Prototypes from 'prop-types'


export default function Header(props) {
    const { tittle } = props
    return (
        <div className="bradcam_area breadcam_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bradcam_text text-center">
                            <h3>{tittle}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Header.prototypes = {
    tittle: Prototypes.string
}