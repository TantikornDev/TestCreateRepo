package k8s

type Metadata struct {
	// construct path to generate a DNS-compatible name for the resource.
	Name string
	// The object's namespace.
	Namespace string
	// Add an annotation.
	Annotations *map[string]*string
	// Add a label.
	Labels *map[string]*string
}
