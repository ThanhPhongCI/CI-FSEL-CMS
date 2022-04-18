import { CollumsModel } from "../base/collums.model";
import { CreateModel } from "../base/create.model";
// import { FilterModel } from "./base/filter.model";

export class CompetitionModel {


    // public get filter(): Array<FilterModel> {
    //     return [

    //         {
    //             Text: 'Trạng thái',
    //             type: 'select',
    //             data: [],
    //             condition: 'status'
    //         },
    //         {
    //             Text: '',
    //             type: 'search',
    //             condition: 'fullText'
    //         }
    //     ];
    // }


    public get collums(): Array<CollumsModel> {
        return [

            {
                id: 'stt',
                name: 'STT',
                width: 100,
                type: 'stt',
            },
            // {
            //     id: 'banner_id',
            //     name: 'Mã doanh nghiệp',
            //     width: 200,
            //     type: 'text',
            // },

            {
                id: 'title',
                name: 'Tiêu đề',
                width: 200,
                type: 'text',
            },
            {
                id: 'content',
                name: 'Nội dung',
                width: 200,
                type: 'text',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 200,
                type: 'status',
            },
            {
                id: 'noun',
                name: '',
                width: 200,
                type: 'edit'
            }

        ];
    }

    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: 'Thêm mới',
                type: 'create',
                icon: ''
            }
        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: '',
                label: '',
                name: '',
                type: 'text'
            },
        ];
    }


}