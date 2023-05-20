import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    AI-Generated Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Promtopia is a prompt generator for writers. It uses AI to generate prompts based on a variety of genres and themes. You can also share your own prompts with the community.
            </p>

            {/* Feed */}
            <Feed />
        </section>

    )
}

export default Home
