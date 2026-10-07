import { RatingTag, Text, ChipGroup } from 'india-bus-ds';

export const Default = () => <RatingTag rating="4.4" />;

export const WithCount = () => <RatingTag rating="4.2" count="860 ratings" />;

export const WithoutIcon = () => <RatingTag rating="3.9" hideIcon />;

export const OnSearchResult = () => (
  <div style={{ width: 328 }}>
    <Text role="title-3">Zing Bus</Text>
    <Text role="caption">A/C Sleeper (2+1) · 21:30 → 06:15</Text>
    <div style={{ marginTop: 8 }}>
      <ChipGroup>
        <RatingTag rating="4.4" count="1,208 ratings" />
      </ChipGroup>
    </div>
  </div>
);
