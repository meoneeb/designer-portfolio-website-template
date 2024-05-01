'use client'
import React from "react";
import {
    InlineWidget
} from "react-calendly";

export default function Calendly() {
    return ( <
        InlineWidget url = "https://calendly.com/oneeb-faisal/demo?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=1e1e1e"
        styles = {
            {
                height: 700,
                overflowY: "hidden"
            }
        }
        />
    );
};