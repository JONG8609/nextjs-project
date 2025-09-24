import classes from "./loading.module.css";

export default function MealsLoadingPage() {
    console.log("로딩?");
  return <p className={classes.loading}>Fetching meals...</p>;
}
