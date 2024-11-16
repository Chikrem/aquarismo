import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './shared/banner/banner.component';
import { CardsComponent } from './shared/cards/cards.component'; // Para a lista de navegação do menu
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { GridComponent } from './pages/home/grid/grid/grid.component';
import { ContainerComponent } from './shared/container/container.component';
import { ProdutosComponent } from './pages/home/grid/produtos/produtos.component';
import { ProdutoComponent } from './shared/produto/produto.component';
import { ParceirosComponent } from './shared/parceiros/parceiros.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';
import { EventosComponent } from './shared/eventos/eventos.component';
import { CarouselComponent } from './pages/home/grid/carousel/carousel.component';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { ImageZoomModalComponent } from './pages/home/gallery/image-zoom-modal/image-zoom-modal.component';
import { LojasComponent } from './pages/home/grid/lojas/lojas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    CardsComponent,
    GridComponent,
    ContainerComponent,
    ProdutosComponent,
    ProdutoComponent,
    ParceirosComponent,
    ModalComponent,
    EventosComponent,
    CarouselComponent,
    GalleryComponent,
    ImageZoomModalComponent,
    LojasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
