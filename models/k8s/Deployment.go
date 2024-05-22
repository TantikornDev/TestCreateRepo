package k8s

type Deployment struct {
	ApiVersion string
	Kind       string
	Metadata   Metadata
	// Label selector for pods.
	//
	// Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
	Selector *LabelSelector
	// Template describes the pods that will be created.
	Template *Pod
	// Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available.
	//
	// Defaults to 0 (pod will be considered available as soon as it is ready).
	// Default: 0 (pod will be considered available as soon as it is ready).
	//
	MinReadySeconds *float64
	// Indicates that the deployment is paused.
	Paused *bool
	// The maximum time in seconds for a deployment to make progress before it is considered to be failed.
	//
	// The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
	// Default: 600s.
	//
	ProgressDeadlineSeconds *float64
	// Number of desired pods.
	//
	// This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
	// Default: 1.
	//
	Replicas *float64
	// The number of old ReplicaSets to retain to allow rollback.
	//
	// This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
	// Default: 10.
	//
	RevisionHistoryLimit *float64
	// The deployment strategy to use to replace existing pods with new ones.
	// Strategy *DeploymentStrategy
}

// A label selector is a label query over a set of resources.
//
// The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
type LabelSelector struct {
	// matchExpressions is a list of label selector requirements.
	//
	// The requirements are ANDed.
	MatchExpressions *[]*LabelSelectorRequirement `field:"optional" json:"matchExpressions" yaml:"matchExpressions"`
	// matchLabels is a map of {key,value} pairs.
	//
	// A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
	MatchLabels *map[string]*string `field:"optional" json:"matchLabels" yaml:"matchLabels"`
}

// A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
type LabelSelectorRequirement struct {
	// key is the label key that the selector applies to.
	Key *string `field:"required" json:"key" yaml:"key"`
	// operator represents a key's relationship to a set of values.
	//
	// Valid operators are In, NotIn, Exists and DoesNotExist.
	Operator *string `field:"required" json:"operator" yaml:"operator"`
	// values is an array of string values.
	//
	// If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
	Values *[]*string `field:"optional" json:"values" yaml:"values"`
}
