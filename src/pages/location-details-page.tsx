import LocationDetails from "@/components/location-details";
import PageTitle from "@/components/page-title";

const LocationDetailsPage = () => {
  return (
    <div className="flex flex-col gap-20 w-full">
      <PageTitle title="Location details" />
      <LocationDetails />
    </div>
  );
};

export default LocationDetailsPage;
