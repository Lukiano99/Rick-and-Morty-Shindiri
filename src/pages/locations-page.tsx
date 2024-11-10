import PageContainer from "@/components/layout/page-container-layout";
import LocationsList from "@/components/locations-list";
import PageTitle from "@/components/page-title";

const LocationsPage = () => {
  return (
    <PageContainer fullWidth>
      <PageTitle title="Locations page"></PageTitle>
      <LocationsList />
    </PageContainer>
  );
};

export default LocationsPage;
