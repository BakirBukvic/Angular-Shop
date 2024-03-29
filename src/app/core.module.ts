import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterrceptorService } from "./auth/auth-intereceptor";
import { RecipeService } from "./recipes/recipe.service";

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterrceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
