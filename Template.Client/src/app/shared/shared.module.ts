import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [CommonModule, RouterModule, MatProgressBarModule],
    exports: [NavbarComponent, FooterComponent]
})

export class SharedModule { }