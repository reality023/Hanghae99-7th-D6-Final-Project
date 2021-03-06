// selectActiveImage
import allSelectActive from "assets/images/category/select/category-active/all.png";
import businessSelectActive from "assets/images/category/select/category-active/business.png";
import cafeSelectActive from "assets/images/category/select/category-active/cafe.png";
import designSelectActive from "assets/images/category/select/category-active/design.png";
import economySelectActive from "assets/images/category/select/category-active/economy.png";
import exhibitionSelectActive from "assets/images/category/select/category-active/exhibition.png";
import fashionSelectActive from "assets/images/category/select/category-active/fashion.png";
import favoriteSelectActive from "assets/images/category/select/category-active/favorite.png";
import foodSelectActive from "assets/images/category/select/category-active/food.png";
import healthSelectActive from "assets/images/category/select/category-active/health.png";
import movieSelectActive from "assets/images/category/select/category-active/movie.png";
import musicSelectActive from "assets/images/category/select/category-active/music.png";
import otherSelectActive from "assets/images/category/select/category-active/other.png";
import performanceSelectActive from "assets/images/category/select/category-active/performance.png";
import shoppingSelectActive from "assets/images/category/select/category-active/shopping.png";
import sportSelectActive from "assets/images/category/select/category-active/sport.png";
import studySelectActive from "assets/images/category/select/category-active/study.png";
import tripSelectActive from "assets/images/category/select/category-active/trip.png";

// selectImage
import allSelect from "assets/images/category/select/category/all.png";
import businessSelect from "assets/images/category/select/category/business.png";
import cafeSelect from "assets/images/category/select/category/cafe.png";
import designSelect from "assets/images/category/select/category/design.png";
import economySelect from "assets/images/category/select/category/economy.png";
import exhibitionSelect from "assets/images/category/select/category/exhibition.png";
import fashionSelect from "assets/images/category/select/category/fashion.png";
import favoriteSelect from "assets/images/category/select/category/favorite.png";
import foodSelect from "assets/images/category/select/category/food.png";
import healthSelect from "assets/images/category/select/category/health.png";
import movieSelect from "assets/images/category/select/category/movie.png";
import musicSelect from "assets/images/category/select/category/music.png";
import otherSelect from "assets/images/category/select/category/other.png";
import performanceSelect from "assets/images/category/select/category/performance.png";
import shoppingSelect from "assets/images/category/select/category/shopping.png";
import sportSelect from "assets/images/category/select/category/sport.png";
import studySelect from "assets/images/category/select/category/study.png";
import tripSelect from "assets/images/category/select/category/trip.png";


// pieceCategoryImage
import businessPieceCategory from "assets/images/category/piece/business.png";
import cafePieceCategory from "assets/images/category/piece/cafe.png";
import designPieceCategory from "assets/images/category/piece/design.png";
import economyPieceCategory from "assets/images/category/piece/economy.png";
import exhibitionPieceCategory from "assets/images/category/piece/exhibition.png";
import fashionPieceCategory from "assets/images/category/piece/fashion.png";
import favoritePieceCategory from "assets/images/category/piece/favorite.png";
import foodPieceCategory from "assets/images/category/piece/food.png";
import healthPieceCategory from "assets/images/category/piece/health.png";
import moviePieceCategory from "assets/images/category/piece/movie.png";
import musicPieceCategory from "assets/images/category/piece/music.png";
import otherPieceCategory from "assets/images/category/piece/other.png";
import performancePieceCategory from "assets/images/category/piece/performance.png";
import shoppingPieceCategory from "assets/images/category/piece/shopping.png";
import sportPieceCategory from "assets/images/category/piece/sport.png";
import studyPieceCategory from "assets/images/category/piece/study.png";
import tripPieceCategory from "assets/images/category/piece/trip.png";

export const typeCategory = [
  "???????????? ??????",
  "?????????",
  "??????",
  "??????",
  "??????",
  "??????",
  "??????",
  "????????????",
  "??????",
  "??????",
  "??????",
  "??????",
  "?????????",
  "??????",
  "??????",
  "??????",
  "??????",
  "??????"
]

export const getSelectMoumCategory = (name) => {
  switch (name) {
    case "???????????? ??????":
      return {
        id: 0,
        category: "???????????? ??????",
        image: allSelect,
        imageActive: allSelectActive
      }
    case "?????????":
      return {
        id: 1,
        category: "?????????",
        image: designSelect,
        imageActive: designSelectActive
      }
    case "??????":
      return {
        id: 2,
        category: "??????",
        image: shoppingSelect,
        imageActive: shoppingSelectActive
      }
    case "??????":
      return {
        id: 3,
        category: "??????",
        image: healthSelect,
        imageActive: healthSelectActive
      }
    case "??????":
      return {
        id: 4,
        category: "??????",
        image: foodSelect,
        imageActive: foodSelectActive
      }
    case "??????":
      return {
        id: 5,
        category: "??????",
        image: cafeSelect,
        imageActive: cafeSelectActive
      }
    case "??????":
      return {
        id: 6,
        category: "??????",
        image: movieSelect,
        imageActive: movieSelectActive
      }
    case "????????????":
      return {
        id: 7,
        category: "????????????",
        image: businessSelect,
        imageActive: businessSelectActive
      }
    case "??????":
      return {
        id: 8,
        category: "??????",
        image: fashionSelect,
        imageActive: fashionSelectActive
      }
    case "??????":
      return {
        id: 9,
        category: "??????",
        image: economySelect,
        imageActive: economySelectActive
      }
    case "??????":
      return {
        id: 10,
        category: "??????",
        image: musicSelect,
        imageActive: musicSelectActive
      }
    case "??????":
      return {
        id: 11,
        category: "??????",
        image: favoriteSelect,
        imageActive: favoriteSelectActive
      }
    case "?????????":
      return {
        id: 12,
        category: "?????????",
        image: sportSelect,
        imageActive: sportSelectActive
      }
    case "??????":
      return {
        id: 13,
        category: "??????",
        image: tripSelect,
        imageActive: tripSelectActive
      }
    case "??????":
      return {
        id: 14,
        category: "??????",
        image: performanceSelect,
        imageActive: performanceSelectActive
      }
    case "??????":
      return {
        id: 15,
        category: "??????",
        image: exhibitionSelect,
        imageActive: exhibitionSelectActive
      }
    case "??????":
      return {
        id: 16,
        category: "??????",
        image: studySelect,
        imageActive: studySelectActive
      }
    case "??????":
      return {
        id: 17,
        category: "??????",
        image: otherSelect,
        imageActive: otherSelectActive
      }
    default:
      return {
        id: 18,
        category: "???????????? ??????"
      }
  }
}

export const getPieceCategory = (name) => {
  switch (name) {
    case "?????????":
      return {
        id: 1,
        category: "?????????",
        image: designPieceCategory,
      }
    case "??????":
      return {
        id: 2,
        category: "??????",
        image: shoppingPieceCategory,
      }
    case "??????":
      return {
        id: 3,
        category: "??????",
        image: healthPieceCategory,
      }
    case "??????":
      return {
        id: 4,
        category: "??????",
        image: foodPieceCategory,
      }
    case "??????":
      return {
        id: 5,
        category: "??????",
        image: cafePieceCategory,
      }
    case "??????":
      return {
        id: 6,
        category: "??????",
        image: moviePieceCategory,
      }
    case "????????????":
      return {
        id: 7,
        category: "????????????",
        image: businessPieceCategory,
      }
    case "??????":
      return {
        id: 8,
        category: "??????",
        image: fashionPieceCategory,
      }
    case "??????":
      return {
        id: 9,
        category: "??????",
        image: economyPieceCategory,
      }
    case "??????":
      return {
        id: 10,
        category: "??????",
        image: musicPieceCategory,
      }
    case "??????":
      return {
        id: 11,
        category: "??????",
        image: favoritePieceCategory,
      }
    case "?????????":
      return {
        id: 12,
        category: "?????????",
        image: sportPieceCategory,
      }
    case "??????":
      return {
        id: 13,
        category: "??????",
        image: tripPieceCategory,
      }
    case "??????":
      return {
        id: 14,
        category: "??????",
        image: performancePieceCategory,
      }
    case "??????":
      return {
        id: 15,
        category: "??????",
        image: exhibitionPieceCategory,
      }
    case "??????":
      return {
        id: 16,
        category: "??????",
        image: studyPieceCategory,
      }
    case "??????":
      return {
        id: 17,
        category: "??????",
        image: otherPieceCategory,
      }
    default:
      return {
        id: 18,
        category: "???????????? ??????"
      }
  }
}