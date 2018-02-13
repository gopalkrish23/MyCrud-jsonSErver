import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AddComponent} from './add/add.component'
import {UpdateComponent} from './update/update.component'

const rtList:Routes=[
	{path:"add",component:AddComponent},
	{path:"update/:id", component:UpdateComponent}
]

@NgModule({
	imports:[RouterModule.forRoot(rtList)],
	exports:[RouterModule]
})
export class RoutingClass{}