export function getTestimonalsByType(list, type) {

  if (!list) return null
  const reducedList = list.reduce((testimonals, testimonial) => {
    if (testimonial?.fields?.isThisAWorkerTestimonial) {
      testimonals.push({
        applied: testimonial?.fields?.applied,
        name: testimonial?.fields?.name,
        testimonial: testimonial?.fields?.testimonial,
        profile: testimonial?.fields?.profile?.fields?.file?.url
      });
    }
    return testimonals;
  }, []);
  const reducedEmployList = list.reduce((testimonals, testimonial) => {
    if (!testimonial?.fields?.isThisAWorkerTestimonial) {
      testimonals.push({
        applied: testimonial?.fields?.applied,
        name: testimonial?.fields?.name,
        testimonial: testimonial?.fields?.testimonial,
        profile: testimonial?.fields?.profile?.fields?.file?.url,
        logo: testimonial?.fields?.businessLink?.fields?.logo?.fields?.file?.url,
        logoId: testimonial?.fields?.businessLink?.sys?.id
      });
    }
    return testimonals;
  }, []);
  return type === 'employ' ? reducedEmployList  : reducedList
}