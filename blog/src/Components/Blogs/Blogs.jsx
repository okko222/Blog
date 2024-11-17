import {BlogCard} from "./../BlogCard/BlogCard"
import styles from "./Blogs.module.css"
export function Blogs(){
    return (
        <section className={styles.container}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </section>
    );
}