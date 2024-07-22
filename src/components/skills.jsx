import { SKILLS } from "../consts";
export default function Skills(){
    return <div className="tw-mb-4 tw-ring-1 tw-ring-gray-900/5 tw-p-4 mobile:tw-w-fit mobile:tw-flex-col tablet:tw-w-80 desktop:tw-w-full desktop:tw-grid desktop:tw-grid-cols-2">
        <div className="tw-flex tw-text-center tw-inline-flex tw-items-center tw-ml-2 tw-p-2 tw-h-8">
            <p className="tw-font-berkeley tw-text-gray-600 tw-text-lg dark:tw-text-darkPara">Languages:</p>
            {
            SKILLS.languages.map((value,index) => {
                return <img className="tw-size-12 tw-object-contain hover:tw-scale-125 hover:tw-transition tw-ease-in-out hover:tw-scale-125 hover:tw-transition tw-ease-in-out" src={value}/>
                })
            }
        </div>
        <div className="tw-flex tw-text-center tw-inline-flex tw-items-center tw-ml-2 tw-p-2 tw-h-8">
            <p className="tw-font-berkeley tw-text-gray-600 tw-text-lg dark:tw-text-darkPara">Databases:</p>
            {
            SKILLS.databases.map((value,index) => {
                return <img className="tw-size-12 tw-object-contain hover:tw-scale-125 hover:tw-transition tw-ease-in-out" src={value}/>
                })
            }
        </div>
        <div className="tw-flex tw-text-center tw-inline-flex tw-items-center tw-ml-2 tw-p-2 tw-h-8">
            <p className="tw-font-berkeley tw-text-gray-600 tw-text-lg dark:tw-text-darkPara">System modelling:</p>
            {
            SKILLS.modelling.map((value,index) => {
                return <img className="tw-size-12 tw-object-contain hover:tw-scale-125 hover:tw-transition tw-ease-in-out" src={value}/>
                })
            }
        </div>
        <div className="tw-flex tw-text-center tw-inline-flex tw-items-center tw-ml-2 tw-p-2 tw-h-8">
            <p className="tw-font-berkeley tw-text-gray-600 tw-text-lg dark:tw-text-darkPara">Deployment:</p>
            {
            SKILLS.deployment.map((value,index) => {
                return <img className="tw-size-12 tw-object-contain hover:tw-scale-125 hover:tw-transition tw-ease-in-out" src={value}/>
                })
            }
        </div>
        <div className="tw-flex tw-text-center tw-inline-flex tw-items-center tw-ml-2 tw-p-2 tw-h-8">
            <p className="tw-font-berkeley tw-text-gray-600 tw-text-lg dark:tw-text-darkPara">Cloud:</p>
            {
            SKILLS.cloud.map((value,index) => {
                return <img className="tw-size-12 tw-object-contain hover:tw-scale-125 hover:tw-transition tw-ease-in-out" src={value}/>
                })
            }
        </div>
    </div>
}