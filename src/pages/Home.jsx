import React from "react"
import Layout from "../component/layout/Layout"
import Banner from "../container/Banner"
import Action from "../container/Action"
import Courses from "../container/Courses"
import Decoration from "../container/Decoration"
import Instructor from "../container/Instructor"
import Feedback from "../container/Feedback"
export default function Home(){
    return(
        <Layout>
            <Banner />
            <Action />
            <Courses />
            <Decoration />
            <Instructor />
            <Feedback />
        </Layout>

    )
} 