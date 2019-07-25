import React from 'react';



class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clapCount:1
        }
    }

    render() {
        return (
            <div >
                <article>
                    <h1>Who can Donate Blood</h1>
                    <p>As long as the person is healthy and heavy enough to feed a vampire on a regular basis and do not mind the bite marks left on their necks and a possible transformation to a ghoul or a vampire.</p>
                    <p><span>Likes :</span>{this.state.clapCount}</p>
                    <button className='fa fa-thumbsUp'></button>
                </article>
            </div>
        );
    }
}

export default Blog;