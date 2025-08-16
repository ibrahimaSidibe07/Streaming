export function Film(props) {
    return (
        <div className="card bg-base-300 mx-auto my-5 w-96 shadow-sm">
            <figure>
                <img src={props.imageSrc} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
