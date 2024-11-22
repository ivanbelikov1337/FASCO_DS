import FilterSize from "./FilterSize.tsx";
import FilterColor from "./FilterColor.tsx";
import FilterPrice from "./FilterPrice.tsx";
import FilterBrands from "./FilterBrands.tsx";
import FilterCollections from "./FilterCollections.tsx";
import FilterTags from "./FilterTags.tsx";



const Filters = () => {

    return (
        <div>
            <h3 className="text-[30px] font-volkhov">Filters</h3>
            <p className="font-volkhov pt-[25px]">Size</p>
            <FilterSize/>
            <p className="pt-[30px] font-volkhov">Colors</p>
            <FilterColor/>
            <p className="font-volkhov pt-[35px]">Price</p>
            <FilterPrice/>
            <p className="pt-[30px] font-volkhov">Brands</p>
            <FilterBrands/>
            <p className="pt-[30px] font-volkhov">Collections</p>
            <FilterCollections/>
            <p className="pt-[30px] font-volkhov">Tags</p>
            <FilterTags/>

        </div>
    );
};

export default Filters;