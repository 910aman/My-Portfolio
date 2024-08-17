/* eslint-disable react/prop-types */

const PageHeader = (props) => {
    const { header_Text, icon } = props;
    return (
        <div className="flex items-center p-7 border-b-2 border-dashed border-theme-main-color ">
            <h2 className="md:text-4xl md:font-bold text-xl font-semibold tracking-widest leading-4 capitalize text-theme-main-color flex flex-grow">{header_Text}</h2>
            <span className="stroke-theme-main-color">{icon}</span>
        </div>
    )
}

export default PageHeader