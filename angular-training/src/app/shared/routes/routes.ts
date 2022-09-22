import {Routes} from '@angular/router';



export const content: Routes = [

    { path: 'ban_doc', loadChildren: () => import('../../pages/quanlythuvien/bandoc/bandoc.module').then(m => m.BandocModule) },
    { path: 'muon_sach', loadChildren: () => import('../../pages/quanlythuvien/muonsach/muonsach.module').then(m => m.MuonsachModule) },
    { path: 'nxb', loadChildren: () => import('../../pages/quanlythuvien/nhaxuatban/nhaxuatban.module').then(m => m.NhaxuatbanModule) },
    { path: 'sach', loadChildren: () => import('../../pages/quanlythuvien/sach/sach.module').then(m => m.SachModule) },
    { path: 'tg', loadChildren: () => import('../../pages/quanlythuvien/tacgia/tacgia.module').then(m => m.TacgiaModule) },
];
