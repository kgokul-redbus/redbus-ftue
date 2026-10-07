import { Slider, Text } from 'india-bus-ds';

export const FareRange = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <Text role="label">Maximum fare</Text>
      <Text role="body" strong tabular>
        ₹1,200
      </Text>
    </div>
    <Slider label="Maximum fare" min={400} max={2500} step={50} defaultValue={1200} />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        ₹400
      </Text>
      <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
        ₹2,500
      </Text>
    </div>
  </div>
);

export const Positions = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 14 }}>
    {[600, 1400, 2500].map((value) => (
      <div key={value} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Text role="caption" tabular style={{ color: 'var(--content-neutral-medium-default)' }}>
          {`Buses under ₹${value.toLocaleString('en-IN')}`}
        </Text>
        <Slider
          label={`Maximum fare ₹${value}`}
          min={400}
          max={2500}
          step={50}
          defaultValue={value}
        />
      </div>
    ))}
  </div>
);

export const Disabled = () => (
  <div style={{ width: 328, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Text role="label" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Maximum fare
    </Text>
    <Slider label="Maximum fare" min={400} max={2500} step={50} defaultValue={900} disabled />
    <Text role="caption" style={{ color: 'var(--content-neutral-medium-default)' }}>
      Clear the ₹ filter to change this
    </Text>
  </div>
);
