import PageContainer from "@/components/layout/page-container-layout";
import LocationDetails from "@/components/location-details";
import PageTitle from "@/components/page-title";

const LocationDetailsPage = () => {
  return (
    <PageContainer fullWidth>
      <PageTitle title="Location details" />
      <LocationDetails />
    </PageContainer>
  );
};

export default LocationDetailsPage;
